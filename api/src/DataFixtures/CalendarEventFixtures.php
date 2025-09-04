<?php

namespace App\DataFixtures;

use App\Entity\CalendarEvent;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CalendarEventFixtures extends Fixture implements DependentFixtureInterface
{
    public const string CALENDAR_EVENT_1_REFERENCE = 'calendar-event-1';

    public function load(ObjectManager $manager): void
    {
        $event = new CalendarEvent();
        $event->setTitle('event 1');
        $event->setDescription('event 1');
        $event->setStartAt(new \DateTimeImmutable());
        $event->setEndAt(new \DateTimeImmutable());
        $event->setUser($this->getReference(UserFixtures::USER_1_REFERENCE, User::class));

        $manager->persist($event);
        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
        ];
    }
}
