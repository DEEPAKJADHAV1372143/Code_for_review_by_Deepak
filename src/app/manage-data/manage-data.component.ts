import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';


import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, CheckboxSelectionCallbackParams,
 
  HeaderCheckboxSelectionCallbackParams,
  IGroupCellRendererParams } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {

   // Each Column Definition results in one Column.
   public columnDefs: ColDef[] = [
    { field: 'make',
    minWidth: 170,
    checkboxSelection: checkboxSelection,
    headerCheckboxSelection: headerCheckboxSelection,
  },
    { field: 'model'},
    { field: 'price' }
  ];

  
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never' = 'always';
  public pivotPanelShow: 'always' | 'onlyWhenPivoting' | 'never' = 'always';

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
  
    resizable: true,
   
    flex: 1,
    minWidth: 100,
    
  };
  
  public multiSortKey: 'ctrl' = 'ctrl';
  // Data that gets displayed in the grid
  public  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },

    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },

    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },

    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {}

  // Example load data from server
 

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  
  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
  ngOnInit(): void {
  

  }

  

}
var checkboxSelection = function (params: CheckboxSelectionCallbackParams) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};
var headerCheckboxSelection = function (
  params: HeaderCheckboxSelectionCallbackParams
) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};
