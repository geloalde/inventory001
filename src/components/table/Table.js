import React, {Component} from "react";
import { Link } from "react-router-dom";
import TableHead from "./TableHead";
import TdTag from "./TdTag"


class Table extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <table className={this.props.className}>
                <TableHead columnList={this.props.columnList}></TableHead>
                <tbody>
                    {
                        this.props.tableData.map((data, index) => {
                            return (
                            <tr key={index}>
                                {
                                    Object.keys(data).map((key, index) => {
                                        return <TdTag key={index} value={data[key]} isLinked="false"></TdTag>
                                    })
                                }
                                <TdTag value={data["id"]} isLinked="true" linkPrefix={this.props.actionLinkPrefix}></TdTag>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        ) 
    }
}

export default Table;