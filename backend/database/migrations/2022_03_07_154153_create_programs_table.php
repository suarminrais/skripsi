<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programs', function (Blueprint $table) {
            $table->id();
            $table->longText('description');
            $table->string('name');
            $table->string('type');
            $table->enum('status', [1, 2, 3, 4, 5])->default(1);
            $table->string('location');
            $table->string('latitude');
            $table->string('longitude');
            $table->integer('periode');
            $table->integer('interest');
            $table->double('funding');
            $table->foreignIdFor(User::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('programs');
    }
}
