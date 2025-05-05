export default async function Profiledetail({params}){
    const {id} = await params
    return (
        <div>Ini detail params {id}</div>
    )
}