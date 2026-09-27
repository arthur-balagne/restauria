<?php

namespace App\Controller;

use App\Auth\Audience;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

final class SecurityController extends AbstractController
{
    #[Route('/login', name: 'app_login', defaults: ['audience' => Audience::Customer->value], methods: ['GET', 'POST'])]
    #[Route('/login/restaurant', name: 'app_login_restaurant', defaults: ['audience' => Audience::Restaurant->value], methods: ['GET', 'POST'])]
    public function login(Audience $audience, AuthenticationUtils $authenticationUtils, #[CurrentUser] ?User $user = null): Response
    {
        if (null !== $user) {
            return $this->redirectToRoute('app_home');
        }

        return $this->render('security/login.html.twig', [
            'audience' => $audience,
            'last_email' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError(),
        ]);
    }

    #[Route('/logout', name: 'app_logout', methods: ['GET', 'POST'])]
    public function logout(): never
    {
        throw new \LogicException('This method is intercepted by the logout key on the firewall.');
    }
}
