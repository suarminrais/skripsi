<?php

namespace Tests\Feature\Api\v1;

use App\Models\Blog;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_get_blog()
    {
        Blog::factory(20)->create();

        $response = $this->get('/api/v1/blog');

        $response
            ->assertStatus(200)
            ->assertJson([
                'data' => []
            ]);
    }

    public function test_can_get_program_detail()
    {
        $blog = Blog::factory()->create();

        $response = $this->get("/api/v1/blog/$blog->id");

        $response
            ->assertStatus(200)
            ->assertJson([
                'name' => $blog->name
            ]);
    }
}
