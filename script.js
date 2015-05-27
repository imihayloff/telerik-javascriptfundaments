
	 var counts = 8;

	 var float = 5.67;
	 var ResFloat = float | 0;

	 var MaxValue = Number.MAX_VALUE;

	 var MinValue = Number.MIN_VALUE;
	   var str = 123;
	   var int = str + 1 | 0;

		var a = 8,
		    b = 9;
		var res = ( a > b);

		var c = 1,
			d = 1;
			var rest = ( c == d);

		var firstName = 'Ivo';
		var familyName = 'Mihaylov';
		var fullName = firstName + ' ' + familyName;

		var arr = ["Test Array"];
		var slashWord = " 'How you doin'?', Joey said'";
		slashWord = ' \'\How you doin\'?, Joey said';
		var tNull = null; 
		
		document.write("<hr>");
		document.write("Counts is: " + counts);
	    document.write("<br>Full number is: " + ResFloat);
	    document.write("<br>Max number is: " + MaxValue);
	    document.write("<br>Min number is: " + MinValue);
	    document.write("<br>Convert string to integer: " + int);
		document.write("<br>Parse Int: " + parseInt("128", 8));
		document.write("<br>Result 8 > 9 is: " + res);
		document.write("<br>Result 1 = 1 is: " + rest);
		document.write("<br>My Name is: " + fullName);
		document.write("<br>Test Array join: " + arr.join(''));
		
		console.log("slashText: " + slashWord);
		console.log(slashWord);
		
		document.write("<hr>");
		document.write("typeof 1: " + typeof(counts));
		document.write("<br>typeof 2: " + typeof(res));
		document.write("<br>typeof 3: " + typeof(fullName));
		document.write("<br>typeof 4: " + typeof(arr));	
		document.write("<br><hr>");

		console.log("This is type of null: " + tNull);
		
		document.write("<h4>For more results open the browser console.</h4>");
