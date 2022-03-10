<?php

namespace Database\Factories;

use App\Models\Program;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class InvestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'program_id' => Program::factory()->create(),
            'status' => true,
            'user_id' => User::factory()->create([
                'type' => 'pemodal'
            ]),
            'total' => 100000,
        ];
    }
}
