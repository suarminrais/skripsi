<?php

use App\Http\Controllers\Api\v1\BlogController;
use App\Http\Controllers\Api\v1\InvestController;
use App\Http\Controllers\Api\v1\ProgramController;
use App\Http\Controllers\Api\v1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::middleware('auth:sanctum')->prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::put('/{user}', [UserController::class, 'update']);
    });

    Route::prefix('program')->group(function () {
        Route::get('/', [ProgramController::class, 'index']);
        Route::get('/{program}', [ProgramController::class, 'show']);
        Route::middleware('auth:sanctum')->put('/{program}', [ProgramController::class, 'update']);
        Route::middleware('auth:sanctum')->post('/', [ProgramController::class, 'store']);
        Route::middleware('auth:sanctum')->delete('/{program}', [ProgramController::class, 'destroy']);
    });

    Route::prefix('blog')->group(function () {
        Route::get('/', [BlogController::class, 'index']);
        Route::get('/{blog}', [BlogController::class, 'show']);
        Route::middleware('auth:sanctum')->put('/{blog}', [BlogController::class, 'update']);
        Route::middleware('auth:sanctum')->post('/', [BlogController::class, 'store']);
        Route::middleware('auth:sanctum')->delete('/{blog}', [BlogController::class, 'destroy']);
    });

    Route::middleware('auth:sanctum')->prefix('invest')->group(function () {
        Route::get('/', [InvestController::class, 'index']);
        Route::post('/', [InvestController::class, 'store']);
        Route::put('/{invest}', [InvestController::class, 'update']);
        Route::delete('/{invest}', [InvestController::class, 'destroy']);
    });
});
