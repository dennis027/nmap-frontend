import { Component } from '@angular/core';
import { NmapScanComponent } from '../nmap-scan/nmap-scan.component';
import { MaterialModule } from '../../shared-imports/imports';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NmapScanComponent,MaterialModule], // Add FormsModule and HttpClientModule to the imports array
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
