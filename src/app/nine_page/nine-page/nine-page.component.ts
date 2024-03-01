import { Component } from '@angular/core';
interface Language {
    name: string;
    image: string;
    color: string; // Dodaj kolor do interfejsu języka
    knowledge: string[]; // Add knowledge related to each language
    devTools: string[];
    // Add knowledge related to each language
}

@Component({
    selector: 'app-nine-page',
    templateUrl: './nine-page.component.html',
    styleUrls: ['./nine-page.component.scss']
})
export class NinePageComponent {
    showKnowledge: boolean = false;
    selectedLanguage: Language | null = null; // Przechowuje wybrany język
    angular = 'assets/frontend/angular.png';
    android = 'assets/android.png';
    html = 'assets/frontend/html.png';
    css = 'assets/frontend/css.png';
    prettier = 'assets/frontend/prettier.png';
    figma = 'assets/frontend/figma.png';
    bootstrap = 'assets/frontend/bootstrap.png';
    gitlab = 'assets/frontend/gitlab.png';
    sass = 'assets/frontend/sass.png';
    js = 'assets/frontend/js.png';
    ts = 'assets/frontend/typescript.png';
    api = 'assets/frontend/api.png';
    firebase = 'assets/frontend/firebase.png';
    github = 'assets/frontend/github.png';
    bloc = 'assets/mobile/bloc.png';
    dart = 'assets/mobile/dart.png';
    rxdart = 'assets/mobile/rxdart.png';
    seet = 'assets/mobile/seet.png';
    frozen = 'assets/mobile/frozen.png';
    idk = 'assets/mobile/idk.png';
    tailwind = 'assets/frontend/tail.png';
    git = 'assets/frontend/git.png';
    php = 'assets/frontend/php.png';
    jira = 'assets/frontend/jira.png';
    vsc = 'assets/frontend/vsc.png';

    webstorm = 'assets/webstorm.png';
    intelij = 'assets/intelij.png';
    postman = 'assets/postman.png';
    spring = 'assets/spring.png';
    jsf = 'assets/jsf.png';
    hibernate = 'assets/hibernate.png';
    java = 'assets/java.png';
    primefaces = 'assets/prime.png'; // Adresy URL obrazków
    flutter = 'assets/flutter.png';
    react = 'assets/react2.png';
    close = 'assets/close.png';
    languages: Language[] = [
        {
            name: 'Flutter',
            image: this.flutter,
            color: '#45D1FD', // Kolor dla Flutter
            knowledge: [
                'SOLID',
                'Clean code',
                'BLoC',
                'Rest Api',
                'Dependency Injection',
                'Freezed',
                'GoRouter',
                'TDD',
                'Unit tests',
                'Retrofit',
                'Firebase',
                'Stripe',
                'SDK',
                'Monetization',
                'Publish on Google Play',
                'Publish on App Store',
                'Mason'
            ],
            devTools: [
                'Android Studio',
                'VS Code',
                'Flutter Inspector',
                'Github',
                'Git',
                'Trello',
                'Jira'
            ]
        },
        {
            name: 'Ionic',
            image: this.react,
            color: '#3880FF', // Kolor dla Ionic
            knowledge: [
                'UI Design',
                'Components',
                'Angular Basics',
                'Sass',
                'CSS',
                'Responsive Design',
                'REST API',
                'Cordova'
            ],
            devTools: [
                'Android Studio',
                'VS Code',
                'Github',
                'Git',
                'Trello',
                'Jira'
            ]
        },
        {
            name: 'Android',
            image: this.android,
            color: '#AAC148', // Kolor dla Android
            knowledge: [
                'XML',
                'Java Basics',
                'Activity Lifecycle',
                'Retrofit',
                'Kotlin'
            ],
            devTools: [
                'Android Studio',
                'ADB',
                'SDK Tools',
                'Github',
                'Git',
                'Trello',
                'Jira'
            ]
        },
        {
            name: 'Angular',
            image: this.angular,
            color: '#E23237', // Kolor dla Angular
            knowledge: [
                'Components',
                'Routing',
                'Forms',
                'Angular Basics',
                'Sass',
                'CSS',
                'Responsive Design',
                'REST API'
            ],
            devTools: [
                'Angular CLI',
                'VS Code',
                'Angular Console',
                'Github',
                'Git',
                'Trello',
                'Jira'
            ]
        }
        // Dodaj pozostałe języki tutaj
    ];

    toggleKnowledge(language: Language) {
        this.selectedLanguage = language; // Ustawia wybrany język
        this.showKnowledge = true;
    }
    closeDialog(event?: MouseEvent) {
        // Jeśli zdarzenie pochodzi z tła dialogu, to zamknij dialog
        if (event?.target === event?.currentTarget) {
            this.showKnowledge = false;
        }
    }
}
