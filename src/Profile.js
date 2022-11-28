import { useParams } from "react-router-dom"

const profileData = {
    taesoo: {
        nickname: "2DC",
        description: "위니브에 갈 인재"
    },
    minseung: {
        nickname: "rosamond",
        description: "네이버에 갈 인재"
    },
    jihyeon: {
        nickname: "jhyun-k",
        description: "카카오에 갈 인재"
    },
    jaeho: {
        nickname: "Man of steel",
        description: "라인에 갈 인재"
    }
}

function Profile() {
    const {id} = useParams()
    const profile = profileData[id]

    if(!profile) {
        return <div>그런 사람 없는뎁쇼</div>
    }
    return (
        <div>
            <h3>{id}({profile.nickname})</h3>
            <p>{profile.description}</p>
        </div>
    )       
}

export default Profile