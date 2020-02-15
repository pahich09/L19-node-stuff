module.exports = (trContent, paginator, prevPage, nextPage) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Lesson 19</h1>
                <table class="table">
                        <thead>
                            <tr>
                                   <th>ID</th>
                                <th>Full Name</th>
                                <th>Position</th>
                                <th>Tech</th>
                                <th>Exp</th>
                                <th>Gender</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>${trContent}</tbody>
                    </table>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    ${prevPage}
    ${paginator}
    ${nextPage}
  
  </ul>
</nav>   
        
                </div>
        </div>
    </div>
</body>
</html>`
}