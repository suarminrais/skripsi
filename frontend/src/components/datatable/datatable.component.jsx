import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';

const DataTable = ({ data, columns }) => {
  return (
    <div class="table-responsive w-100">
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            {
              columns.map((item) => <th>{item.title}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 ? data.map((item, i) => <tr><td>{i + 1}</td>{columns.map(data => <td>{data?.formatter ? data.formatter(_.get(item, data.field), _.get(item, 'id')) : _.get(item, data.field)}</td>)}</tr>) : <tr><td colSpan={columns.length + 1}>Tidak ada data</td></tr>
          }
        </tbody>
        <tfoot>
          {/* <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav> */}
        </tfoot>
      </table>
    </div>
  )
}

export default DataTable;
