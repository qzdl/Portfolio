var tree = [];
var count = 0;
var leaves = [];
var leafColor = $("#leafColor").value();
var leafShape = $("#leafShape").value();
var angle = $("#angleSlider").value();
var jittery = $("#isJitter").value();
var jitterScope = $("#jitterScope").value();

function setup() {
    createCanvas(400, 400);
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 100);
    root = new Branch(a, b);

    tree[0] = root;
}

function mousePressed() {
    for (var i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
            tree.push(tree[i].branchA());
            tree.push(tree[i].branchB());
        }
        tree[i].finished = true;

    }
    count++;

    if (count == 7) {
        for (var i = 0; i < tree.length; i++) {
            if (!tree[i].finished) {
                var leaf = tree[i].end.copy();
                leaves.push(leaf);
            }

        }

    }

}

function draw() {
    background(51);
    root.show();

    for (var i = 0; i < tree.length; i++) {
        tree[i].show();

        if (jittery) {
            tree[i].jitter();
        }
    }

    for (var i = 0; i < leaves.length; i++) {
        fill(255, 0, 100, 100); //purple
        //fill(leafColor);
        
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 8, 8); // circle
        leaves[i].y += random(0, (22 / 7));

                
    }

}

function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

    this.jitter = function () {
        this.end.x += random(-1, 1);
        this.end.y += random(-1, 1);

        //this.end.x += random(jitterScope);
        //this.end.y += random(jitterScope);
    }

    this.show = function () {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    };

    this.branchA = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI / 6);
        //dir.rotate(angle);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);
        var b = new Branch(this.end, newEnd);
        return b;
    };

    this.branchB = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI / 4);
        //dir.rotate(-angle);
        dir.mult(0.67);
        var newEnd = p5.Vector.add(this.end, dir);
        var b = new Branch(this.end, newEnd);
        return b;
    };
}
