import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded mb-3">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">angular-qq-maps</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" routerLink="/">地图</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLink="/panorama">街景</a>
                </li>
            </ul>
        </div>
    </nav>
    <p class="mb-3">Angular 2+ QQ Maps Components，有关更多细节见<a href="https://github.com/cipchk/angular-qq-maps/blob/master/README.md" target="_blank">README.md</a></p>
    <router-outlet></router-outlet>
  `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
