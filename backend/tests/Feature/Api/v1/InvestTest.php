<?php

namespace Tests\Feature\Api\v1;

use App\Models\Invest;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class InvestTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_get_invest()
    {
        Invest::factory(20)->create();

        Sanctum::actingAs(User::factory()->create());

        $response = $this->get('/api/v1/invest');

        $response
            ->assertStatus(200)
            ->assertJson([
                'data' => []
            ]);
    }
}
