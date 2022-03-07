<?php

namespace Tests\Feature\Api\v1;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_update_user()
    {
        $user = User::factory()->create();

        Sanctum::actingAs($user);

        $response = $this->put("/api/v1/user/$user->id", [
            'name' => 'aco'
        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'message' => 'data updated!'
            ]);
    }

    public function test_admin_get_user()
    {
        $user = User::factory()->create();
        User::factory(20)->create();

        Sanctum::actingAs($user);

        $response = $this->get('/api/v1/user');

        $response
            ->assertStatus(200)
            ->assertJson([
                'data' => []
            ]);
    }
}
