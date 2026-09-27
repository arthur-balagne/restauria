<?php

namespace App\Controller;

use App\Auth\Audience;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class EmailVerificationController extends AbstractController
{
    #[Route('/verify-email', name: 'app_verify_email', defaults: ['audience' => Audience::Customer->value], methods: ['GET'])]
    #[Route('/verify-email/restaurant', name: 'app_verify_email_restaurant', defaults: ['audience' => Audience::Restaurant->value], methods: ['GET'])]
    public function verify(Audience $audience): Response
    {
        return $this->render('email_verification/verify.html.twig', ['audience' => $audience]);
    }
}
