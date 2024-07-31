
import { MasterService } from './../../../services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-template-fg',
  templateUrl: './template-fg.component.html',
  styleUrls: ['./template-fg.component.css']
})
export class TemplateFgComponent implements OnInit {

  isA5Printing: boolean = false;


  constructor(private Router: Router, private MasterService: MasterService,) { }

  params = this.Router.url.split('/')[3];

  data: any;
  url: any;
  isHide = false;

  isLoading: boolean = true;

  ngOnInit(): void {
    this.MasterService.showFG(this.params).subscribe((res) => {
      this.data = res;
      this.url = `https://myapps.aio.co.id/stock-opname/fg/form/${this.data.id}`
      // this.url = `http://192.168.144.81:4200/fg/form/${this.data.id}`
      this.isLoading = false;
    })
  }
  exportPdf() {
    html2canvas(document.getElementById('table')!).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      // const height = canvas.height * width / canvas.width;
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save(`${this.data.name}.pdf`);
    })
    this.Router.navigate(['/fg']);
  }

  // print() {
  //   this.isHide = true;
  //   window.print();
  // }
  // make print() function as async
  async print() {
    this.isHide = true;
    let originalTitle: string = ''; // Deklarasikan variabel originalTitle di luar blok try-catch-finally
    try {
      // Mengubah nilai isHide sebelum menjalankan window.print()
      // Lakukan operasi atau logika lain yang diperlukan sebelum mencetak

      await this.delay(500); // Contoh penundaan operasi selama 500 milidetik (gunakan jika diperlukan)

      originalTitle = document.title; // Simpan judul asli

      document.title = `${this.data.name}`; // Set judul kustom

      window.print();

      // Mengubah nilai isHide setelah menjalankan window.print()
      // Lakukan operasi atau logika lain yang diperlukan setelah mencetak
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    } finally {
      if (originalTitle) {
        document.title = originalTitle; // Kembalikan judul asli jika variabel originalTitle memiliki nilai
      }
      this.isHide = false;
    }
  }

  // Fungsi penundaan (delay) untuk menunggu operasi tertentu (gunakan jika diperlukan)
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
