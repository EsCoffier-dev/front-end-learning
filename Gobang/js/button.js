
  window.onload=function (){
      let Uid=GetCookie("uid");
      let teacher;
      $.ajax({
          type: "post",
          url: "http://localhost:8000/Server/courses",
          data:{

              "uid":Uid,

          },
          success: function(res) {
              if(res.node==1)alert(res.status)
              console.log(res.node)
              let data=res.data;
              console.log(data);
              let table=document.getElementById("table");
              for( i=0;i<data.length;i++){
                  let row = table.insertRow(i+1);
                  let id = row.insertCell(0);
                  let name = row.insertCell(1);
                  let teacher = row.insertCell(2);
                  let code = row.insertCell(3);
                  let address = row.insertCell(4);
                  let button = row.insertCell(5);
                  id.innerHTML = data[i].id;
                  name.innerHTML = data[i].name;
                  teacher.innerHTML = data[i].teacher;
                  code.innerHTML = data[i].code;
                  address.innerHTML = data[i].address;
                  button.innerHTML=" <button onclick="+"\"coursesturnsub(i-1)\" class=\"button1\">查看</button>";
                  let elid="button"+i;
                  console.log(elid);
                  row.setAttribute('id',elid);
                  console.log(document.getElementById(elid));
              }
          },
          error :function (error){
              console.log(error);
              alert('网络异常');
              window.location.replace("main.html");
          }

      });
  }