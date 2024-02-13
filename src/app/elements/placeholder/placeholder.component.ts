import { Component, Input } from '@angular/core';

interface Lines {
  lineNum: number;
  widths: number[];
}

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css',
})
export class PlaceholderComponent {
  p_lines: Lines[] = [];
  img_lines: Lines[] = [];

  @Input() set lines(n: number) {
    PlaceholderComponent.setLine(this.img_lines, 4, 6);
    PlaceholderComponent.setLine(this.p_lines, n - 4, 12);
  }

  private static setLine(lines: Lines[], n: number, limit: number): void {
    for (let i = 0; i < n; i++) {
      let line: Lines = { lineNum: i, widths: [] };
      let width = 0;
      while (true) {
        let w = Math.floor(Math.random() * limit);
        if (w === 0) continue;
        width += w;
        if (width > limit - 1) {
          break;
        } else {
          line.widths.push(w);
        }
      }
      lines.push(line);
    }
  }
}
