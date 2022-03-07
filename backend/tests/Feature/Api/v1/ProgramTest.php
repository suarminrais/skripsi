<?php

namespace Tests\Feature\Api\v1;

use App\Models\Program;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProgramTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_get_program()
    {
        Program::factory(20)->create();

        $response = $this->get('/api/v1/program');

        $response
            ->assertStatus(200)
            ->assertJson([
                'data' => []
            ]);
    }

    public function test_can_get_program_detail()
    {
        $program = Program::factory()->create();

        $response = $this->get("/api/v1/program/$program->id");

        $response
            ->assertStatus(200)
            ->assertJson([
                'name' => $program->name
            ]);
    }
}
