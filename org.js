var tran = '';
            var tranContainer = $('.tran');
            var org = $('.org').val();
            function translater(str) {
                for (i=0; i<str.length; i++) {
                    var j = i - 1;
                    if (j < 0) {
                        j = 0;
                    }
                    var mychar = str.substr(i,1);
                    if (mychar === 'a') {
                        mychar = 'c';
                    } else if (mychar === 'b') {
                        mychar = 'd';
                    } else if (mychar === 'c') {
                        mychar = 'e';
                    } else if (mychar === 'd') {
                        mychar = 'f';
                    } else if (mychar === 'e') {
                        mychar = 'g';
                    } else if (mychar === 'f') {
                        mychar = 'h';
                    } else if (mychar === 'g') {
                        mychar = 'i';
                    } else if (mychar === 'h') {
                        mychar = 'j';
                    } else if (mychar === 'i') {
                        mychar = 'k';
                    } else if (mychar === 'j') {
                        mychar = 'l';
                    } else if (mychar === 'k') {
                        mychar = 'm';
                    } else if (mychar === 'l') {
                        mychar = 'n';
                    } else if (mychar === 'm') {
                        mychar = 'o';
                    } else if (mychar === 'n') {
                        mychar = 'p';
                    } else if (mychar === 'o') {
                        mychar = 'q';
                    } else if (mychar === 'p') {
                        mychar = 'r';
                    } else if (mychar === 'q') {
                        mychar = 's';
                    } else if (mychar === 'r') {
                        mychar = 't';
                    } else if (mychar === 's') {
                        mychar = 'u';
                    } else if (mychar === 't') {
                        mychar = 'v';
                    } else if (mychar === 'u') {
                        mychar = 'w';
                    } else if (mychar === 'v') {
                        mychar = 'x';
                    } else if (mychar === 'w') {
                        mychar = 'y';
                    } else if (mychar === 'x') {
                        mychar = 'z';
                    } else if (mychar === 'y') {
                        mychar = 'a';
                    } else if (mychar === 'z') {
                        mychar = 'b';
                    } else {
                        mychar = mychar;
                    }
                    // console.log(mychar);
                    // console.log(j + ', ' + i)
                    tranContainer.append(mychar);
                }
            }
            function hopToIt() {
                tranContainer.text('');
                var org = $('.org').val();
                return translater(org);
            }
            tran = translater(org);
            tranContainer.text(tran)