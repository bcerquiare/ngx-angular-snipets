/**
* Snipet: show a loading when change to a route that needs to fetch (resolve) data
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  title = 'angu-res';
  constructor(public router: Router) {

    this.router.events.subscribe(ev => {

      if (ev instanceof NavigationStart) {
        this.loading = true;
      }

      if (
        ev instanceof NavigationEnd ||
        ev instanceof NavigationCancel ||
        ev instanceof NavigationError
      ) {
        this.loading = false;
      }

    });

  }
}
