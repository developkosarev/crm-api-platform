<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class HealthCheckController
{
    #[Route('/health-check', name: 'app_health_check', methods: ['GET'])]
    public function __invoke(Request $request): JsonResponse
    {
        try {
            return new JsonResponse([
              'status' => 'ok'
            ]);
        } catch (\Throwable $e) {
            return new JsonResponse(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }
}
