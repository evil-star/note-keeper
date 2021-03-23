import React from "react";
import Search from "antd/lib/input/Search";

const SearchNoteInput = (props: any) => {
    const { style } = props;
    return <Search placeholder="Поиск" enterButton style={style} />;
};

export default SearchNoteInput;
