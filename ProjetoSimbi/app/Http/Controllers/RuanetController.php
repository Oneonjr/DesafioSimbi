<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RuanetModel;

use OpenApi\Annotations as OA;

class RuanetController extends Controller
{
/**
 * @OA\Get(
 *     path="/dados",
 *     operationId="getDados",
 *     tags={"/dados"},
 *     summary="Obter todos os dados",
 *     description="Retorna uma lista de dados",
 *     @OA\Response(
 *         response=200,
 *         description="Sucesso"
 *     )
 * )
 */
    public function index()
    {
        $dados = RuanetModel::all();
        return response()->json($dados);
    }
}