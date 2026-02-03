import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TahoeIcon, TahoeIconName } from '../../tahoe-icon/tahoe-icon';

interface NotificationItem {
  text: string;
  time: string;
  icon: TahoeIconName;
}

interface SuggestionItem {
  text: string;
}

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule, TahoeIcon],
  templateUrl: './right-sidebar.html',
  styleUrls: ['./right-sidebar.scss'],
})
export class RightSidebar implements OnInit {
  // Notifications
  notificationItems: NotificationItem[] = [
    {
      text: 'Bazar added by Rahat (৳650)',
      time: '20 min ago',
      icon: 'shopping-bag',
    },
    {
      text: 'Meal +1 for Asif',
      time: '1 hr ago',
      icon: 'utensils',
    },
    {
      text: 'Deposit by Asif (৳1000)',
      time: 'Yesterday',
      icon: 'wallet',
    },
    {
      text: 'Internet Bill added by Yasnian',
      time: 'Yesterday',
      icon: 'file-text',
    },
  ];

  // AI Suggestions
  suggestionItems: SuggestionItem[] = [
    { text: 'Meal rate is rising slightly; review recent large expenses.' },
    { text: "2 members haven't deposited this week: Rahat & Danif." },
    { text: 'Consider a group shopping trip to reduce costs.' },
  ];

  // Islamic Quotes
  allQuotes: Array<{ text: string; reference: string }> = [
    {
      text: 'The best among you are those who have the best manners and character.',
      reference: 'Prophet Muhammad (PBUH)',
    },
    {
      text: 'Indeed, with hardship [will be] ease.',
      reference: 'Quran 94:6',
    },
    {
      text: 'And He found you lost and guided [you].',
      reference: 'Quran 93:7',
    },
    {
      text: 'The strong person is not the one who can overpower others, but the one who can control himself when angry.',
      reference: 'Prophet Muhammad (PBUH)',
    },
    {
      text: 'So remember Me; I will remember you.',
      reference: 'Quran 2:152',
    },
    {
      text: 'Whoever is kind, Allah will be kind to him; therefore be kind to man on the earth.',
      reference: 'Prophet Muhammad (PBUH)',
    },
    {
      text: 'Do not lose hope, nor be sad.',
      reference: 'Quran 3:139',
    },
  ];

  currentQuoteText = '';
  currentQuoteFooter = '';

  ngOnInit(): void {
    this.loadRandomQuote();
  }

  loadRandomQuote(): void {
    const randomQuote = this.allQuotes[Math.floor(Math.random() * this.allQuotes.length)];
    this.currentQuoteText = randomQuote.text;
    this.currentQuoteFooter = `— ${randomQuote.reference}`;
  }

  onRefreshQuote(): void {
    const currentText = this.currentQuoteText;
    const availableQuotes = this.allQuotes.filter((q) => q.text !== currentText);
    const newQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];

    this.currentQuoteText = newQuote.text;
    this.currentQuoteFooter = `— ${newQuote.reference}`;
  }
}
