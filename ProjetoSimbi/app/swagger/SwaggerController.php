<?php

namespace App\Swagger;

use OpenApi\Annotations as OA;

/**
 * @OA\OpenApi(
 *     @OA\Info(
 *         title="API Projeto Rouanet",
 *         version="1.0.0",
 *         description="API para consulta de projetos Rouanet"
 *     ),
 *     @OA\Server(
 *         url="http://127.0.0.1:8000/",
 *         description="API Local"
 *     )
 * )
 */
class SwaggerController
{
}