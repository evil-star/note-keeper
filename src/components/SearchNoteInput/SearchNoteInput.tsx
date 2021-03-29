import React from "react";
import Search from "antd/lib/input/Search";

type Props = {
	className?: string,
	style?: React.CSSProperties,
}

const SearchNoteInput: React.FC<Props> = (props) => {
    return <Search placeholder="Поиск" enterButton {...props} />;
};

export default SearchNoteInput;
