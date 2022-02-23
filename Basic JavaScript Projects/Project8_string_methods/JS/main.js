function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function slice_quote(){
    var C = "\"Success is nothing more than a few simple disciplines, practiced every day; "
    var Section = C.slice(43,53);
    var uppSection = Section.toUpperCase();
    var searchC = C.search();
    document.getElementById("Sliceq").innerHTML = uppSection;
}

function search_method(){
    newRE = new RegExp('practice')
    var C = "\"Success is nothing more than a few simple disciplines, practiced every day; "
    var searchC = C.search(newRE);
        if (searchC == -1)
            {
                document.getElementById("Searchq").innerHTML = ("'practice' is not found in "+C);
            }
            else
            {
                document.getElementById("Searchq").innerHTML = ("'practice' is found in "+C);
            }
}

function string_Method(){
    var X = 454;
    document.getElementById("String").innerHTML = X.toString();
}

function concat_Method(){
    var q1 = ["Success", "is", "nothing", "more", "than", "a", "few",];
    var q2 = ["simple", "disciplines", "practiced", "every", "day"];
    var q3 = q1.concat(q2);
    document.getElementById("Concat").innerHTML = q3;
}


function precision_Method(){
    var X = 454.33669955452679;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}