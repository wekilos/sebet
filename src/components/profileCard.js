import React  from "react";
// import { Modal} from 'antd';

import "./profileCard.css";

const ProfileCard = (props)=>{
//     const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(!isModalVisible);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };
    return (

        <div className="profileCard">
            {/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ul className="sargytlarym-modal">
                    <li>ID: {props.id}</li>
                    <li>Sargyt taryhy: {props.taryhy}</li>
                    <li>Haryt Sany: {props.sany}</li>
                    <li>Jemi: {props.jemi}</li>
                    <li>Sargyt ýagdaýy: {props.yagdayy}</li>
                </ul>
            </Modal> */}
            <table key="table">
                <tr key="head" className="table-head">
                    <td className="ID">ID</td>
                    <td>Sargyt taryhy</td>
                    <td>Haryt sany</td>
                    <td>Jemi</td>
                    <td>Sargyt ýagdaýy</td>
                    <td>Töleg şekili</td>
                    
                </tr>
                <tr key="body" className="table-body">
                    <td className="ID">{props.id}</td>
                    <td>{props.taryhy}</td>
                    <td>{props.sany}</td>
                    <td className="jemi">{props.jemi} TMT</td>
                    <td className={`yagday${props.yagday}`}>
                        {props.yagdayy}</td>
                    <td>{props.toleg}</td>
                </tr>
            </table>
            {/* <button onClick={()=>showModal()}>Sargyt maglumatlary</button> */}
        </div>
    )
}

export default ProfileCard;