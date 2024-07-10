import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import entityComparator from '../comparators/entityComparator';

const Table = () => {
    const columnDefs = [
        { headerName: "Deliverable title", field: "deliverableTitle", filter: 'agTextColumnFilter', },
        { headerName: "Related entity", field: "relatedEntity", filterValueGetter: params => params.data.entityRelation?.name, comparator: entityComparator},
        { headerName: "Territory", field: "territory" },
        { headerName: "Jurisdiction", field: "jurisdiction" },
        { headerName: "Year", field: "year",   filter: 'agNumberColumnFilter', },
        { headerName: "Assignee", field: "assignee" },
        { headerName: "Due date", field: "dueDate", filterValueGetter: params => params.data.dueDate?.formatted, },
        { headerName: "Status", field: "status", filterValueGetter: params => params.data.status.name, },
        { headerName: "Source status", field: "sourceStatus",  filterValueGetter: params => params.data.subStatus?.name, },
    ];

    const rowData = [
        { deliverableTitle: "Deliverable 2047", relatedEntity: "Entity 456", territory: "LUX", jurisdiction: "AAA", year: "2024", assignee: "2", dueDate: "29 Sep 2018", status: "Not started", sourceStatus: "DataCollection", actions: "link" },
        { deliverableTitle: "Deliverable 648", relatedEntity: "Duplicated", territory: "USA", jurisdiction: "CCC", year: "2024", assignee: "2", dueDate: "13 Dec 2018", status: "In progress", sourceStatus: "DataCollection", actions: "link" },
        { deliverableTitle: "Deliverable 1245", relatedEntity: "Duplicated", territory: "USA", jurisdiction: "CCC", year: "2023", assignee: "2", dueDate: "05 Jan 2019", status: "In progress", sourceStatus: "In Review", actions: "link" },
        { deliverableTitle: "Deliverable 1245", relatedEntity: "Entity 123", territory: "USA", jurisdiction: "CCC", year: "2023", assignee: "2", dueDate: "05 Jan 2019", status: "In progress", sourceStatus: "In Review", actions: "link" },

        { deliverableTitle: "Deliverable 22", relatedEntity: "Duplicated", territory: "USA", jurisdiction: "CCC", year: "2023", assignee: "2", dueDate: "05 Jan 2019", status: "In progress", sourceStatus: "In Review", actions: "link" }, 
        { deliverableTitle: "Yoda", relatedEntity: "Duplicated", territory: "USA", jurisdiction: "CCC", year: "2023", assignee: "2", dueDate: "05 Jan 2019", status: "In progress", sourceStatus: "In Review", actions: "link" }, 
        { deliverableTitle: "Obi Wan", relatedEntity: "Duplicated", territory: "USA", jurisdiction: "CCC", year: "2023", assignee: "2", dueDate: "05 Jan 2019", status: "In progress", sourceStatus: "In Review", actions: "link" }, 
        { deliverableTitle: "Vader", relatedEntity: "Duplicated", territory: "USA", jurisdiction: "CCC", year: "2023", assignee: "2", dueDate: "05 Jan 2019", status: "In progress", sourceStatus: "In Review", actions: "link" }, 
        { deliverableTitle: "Skywalker", relatedEntity: "Duplicated", territory: "USA", jurisdiction: "CCC", year: "2023", assignee: "2", dueDate: "05 Jan 2019", status: "In progress", sourceStatus: "In Review", actions: "link" },];

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                rowSelection="multiple"
                groupSelectsChildren={true}
            />
        </div>
    );
}

export default Table;
