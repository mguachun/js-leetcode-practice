var isValid = function(s) {
        //if string(s) has corresponding brackets 
    //return true
    //else 
    //return false

    //if a string has an opening parens and is the first char = false
    //if a string has closing parens and is not the first char = true
    //an open parens can't be the first char unless it has an ending parens 
    //if a string has an opening and closing parens of the same type = true
    //if a string has and open/closing but not the same type = false

    //must be even amount of braces
    //ordering matters
    //there has to be an equal amount of opening and closing parens
    //if there are equal amount of parens = true else false
    var stack = []
    
    for (let i = 0; i < s.length; i++) 
    {
      // if s[i] = "}" == false
       // if s[i] == "{" == true
        //if more than one "{" keep a count using openString
        //if more than one "}" keep a count using closedString
        
        if (s[i] == "(" || s[i] == "[" || s[i] == "{")
        {
            stack.push(s[i])
        }
        else
        {
          if (stack.length <= 0) 
            {
                return false;
            } 
            if (s[i] == ")") 
            {
                if (stack.pop() != "(") {
                    return false;
                }
            }
             if (s[i] == "}") 
            {
                if (stack.pop() != "{") {
                    return false;
                }
            }
             if (s[i] == "]") 
            {
                if (stack.pop() != "[") {
                    return false;
                }
            }
        }
    } 
    if (stack.length > 0) {
        return false
    }
    return true
    
};