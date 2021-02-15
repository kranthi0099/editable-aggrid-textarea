import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  defaultColDef = {
    flex: 1,
    minWidth: 130,
    editable: true,
    resizable: true
  };

  columnDefs = [
    { headerName: "Ticker", field: "ticker" },
    { headerName: "Company Name", field: "companyName" },
    { headerName: "Last BP", field: "lastBP" },
    { headerName: "Price", field: "price" },
    { headerName: "Composite Rating", field: "compositeRating" },
    { headerName: "EPS Rating", field: "epsRating" },
    { headerName: "RS Rating", field: "rsRating" },
    { headerName: "SMR Rating", field: "smrRating" },
    { headerName: "Acc Dis. Rating", field: "accDisRating" },
    { headerName: "Group Rel. Rating", field: "grpRelRating" },
    { headerName: "IBD Note", field: "ibdNote" },
    { headerName: "IBD Lists", field: "ibdLists" },
    { headerName: "EPS Date", field: "EPS Date" },
    { headerName: "To Go EPS", field: "toGoEPS" },
    { headerName: "Zack Rank", field: "zackRank" },
    {
      headerName: "Last 3 Week Price % Change",
      field: "last3weekPricePctChange"
    },
    { headerName: "% From 50D", field: "%From50D" },
    { headerName: "% From 200D", field: "%From200D" },
    {
      headerName: "Notes",
      cellEditor: "agLargeTextCellEditor",
      valueGetter: (params: any) => {
        let consolidatedComments = "";
        params.data.notes.forEach(note => {
          consolidatedComments = consolidatedComments + note.comment + "\n";
        });
        return consolidatedComments;
      },
      valueSetter: (params: any) => {
        params.data.notes[0].comment = params.newValue;
        return true;
      }
    }
  ];

  rowData = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get("assets/data.json").subscribe((data: any) => {
      this.rowData = data["tickers"];
    });
  }
}
