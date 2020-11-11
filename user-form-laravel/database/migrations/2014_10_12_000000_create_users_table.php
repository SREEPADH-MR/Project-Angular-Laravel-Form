<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->char('name')->nullable();
            $table->date('dob')->nullable();
            $table->char('gender')->nullable();
            $table->char('district')->nullable();
            $table->string('email')->nullable();
            $table->string('number')->nullable();
            $table->string('password')->nullable();
            $table->string('about')->nullable();
            $table->string('qualification')->nullable();
            $table->string('profile_image')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
