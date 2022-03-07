<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProgramFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'description' => $this->faker->paragraph(),
            'name' => $this->faker->name(),
            'type' => $this->faker->word(),
            'location' => $this->faker->city(),
            'latitude' => $this->faker->latitude(),
            'longitude' => $this->faker->longitude(),
            'periode' => $this->faker->randomDigitNotNull(),
            'interest' => $this->faker->randomDigitNotNull(),
            'funding' => 5000000,
            'user_id' => User::factory()->create(),
        ];
    }
}
