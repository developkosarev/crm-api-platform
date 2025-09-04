<?php

namespace App\Controller;

use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class HealthCheckController
{
    #[Route('/health-check', name: 'app_health_check', methods: ['GET'])]
    public function __invoke(Request $request, Connection $connection): JsonResponse
    {
        try {
            $connection->executeQuery('SELECT 1');
            return new JsonResponse([
              'status' => 'ok',
              'all' => $request->headers->all()
            ]);
        } catch (\Throwable $e) {
            return new JsonResponse(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }
}
