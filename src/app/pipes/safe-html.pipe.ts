import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeHtml' // This should match the name you're using in the template
})
export class SafeHtmlPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    // Regular expression to match port numbers (e.g., 22/tcp, 53/tcp, etc.)
    const portRegex = /\b\d{1,5}(?=\/tcp)\b/g;

    // Replace port numbers with HTML span elements that have a border
    return value.replace(portRegex, (match) => {
      return `<span class="port-number" style="border: 1px solid #007bff; padding: 2px 4px; border-radius: 4px;">${match}</span>`;
    });
  }
}