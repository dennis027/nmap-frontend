import { Component } from '@angular/core';
import { NmapService } from '../../services/nmap.service';
import { MaterialModule } from '../../shared-imports/imports';

@Component({
  selector: 'app-nmap-scan',
  standalone: true,
  imports: [MaterialModule], // Add FormsModule and HttpClientModule to the imports array
  templateUrl: './nmap-scan.component.html',
  styleUrl: './nmap-scan.component.css'
})
export class NmapScanComponent {
  target = '';
  flags = '';
  scanResult: string | null = null;
  error: string | null = null;
  isLoading = false;

  constructor(private nmapService: NmapService) {}

  performScan() {
    if (!this.target) {
      this.error = 'Target is required!';
      return;
    }

    this.isLoading = true;
    this.error = null;
    this.scanResult = null;

    this.nmapService.scanTarget(this.target, this.flags).subscribe({
      next: (response) => {
        this.scanResult = response.result;
        console.table(this.scanResult)
        this.isLoading = false;
      },
      error: (err) => {
        this.error = `Error: ${err.error.error || 'Something went wrong'}`;
        this.isLoading = false;
      },
    });
  }
}    