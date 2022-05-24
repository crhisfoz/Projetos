import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React  from "react";

const Search = (props) => {

  const input = props.input
  const onChangeInput = props.onChangeInput

    return(
 
        <TextField className="search"
            label={'Restaurante'}
            variant={'outlined'}
            InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                )
            }}
            value={input}
            onChange={onChangeInput}
        /> 
    )
}

export default Search;