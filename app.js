const express = require('express');
const app = express();
const stuff = require('./stuff');
const html = require('./html');
const pagination = require('./pagination');

const createRowData = (arr) => {
    return arr.map(el => {
        return `<tr>
        <td>${el.id}</td>
        <td>${el.fullName}</td>
        <td>${el.position}</td>
        <td>${el.skill}</td>
        <td>${el.exp}</td>
        <td>${el.gender}</td>
        <td>${el.salary}</td>
        </tr>`
    })
}

app.get('/', (req, res) => {
    const pagData = pagination('/?page=', req, stuff);
    const createPagination = objData => {
        return new Array(objData.pages).fill('').map((el, i) => {
            return `<li ${getCurrPage(pagData, i)}><a class="page-link" href="?page=${i + 1}">${i + 1}</a></li>`
        })
    }
    const getCurrPage = (objData, index) => {
        return objData.info.currentPage == index + 1 ? `class="page-item page-item active"` : `class="page-item"`
    }
    const addPrevPage = objData => {
        return objData.info.currentPage == 1
            ?
            `<li class="page-item disabled">
         <a class="page-link" href="${objData.info.prev}" tabindex="-1" aria-disabled="true">Previous</a>
            </li>`
            :
            `<li class="page-item">
         <a class="page-link" href="${objData.info.prev}" tabindex="-1">Previous</a>
            </li>`
    }
    const addNextPage = objData => {
        return objData.info.currentPage == objData.info.pages
            ?
            `<li class="page-item disabled">
        <a class="page-link" href="${objData.info.next}" tabindex="-1" aria-disabled="true">Next</a>
            </li>`
            :
            `<li class="page-item">
        <a class="page-link" href="${objData.info.next}" tabindex="-1">Next</a>
            </li>`
    }

    res.send(
        html(createRowData(pagData.results), createPagination(pagData.info), addPrevPage(pagData), addNextPage(pagData))
    );
})
app.listen(3000, () => {
    console.log('Server was runnig...');
})
