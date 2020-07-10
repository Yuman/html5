process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

	this.insert=function(head,data){
          //complete this method
          debugger
          if (head == null) {
              head = new Node(data);
              return head;
          }
          mid = head;
          while (mid.next != null){
              mid = mid.next;
          }
          mid.next = new Node(data)
          return head;
    };

	this.display=function(head){
        var start=head;
            while(start){
                //process.stdout.write(start.data+" ");
                console.log(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    // T=parseInt(readLine());
    T = 3
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
       // var data=parseInt(readLine());
        data = Math.round(Math.random()*30)
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}