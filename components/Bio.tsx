export default function Bio() {
    return(
        <div className="w-full border-2 border-[var(--light-purple)] shadow-lg shadow-[var(--light-purple)] overflow-hidden rounded-[32px] p-4 my-4 flex justify-center items-center gap-4">
            <img className="w-24 h-32 object-cover rounded-[16px] overflow-hidden border-2 border-[var(--light-purple)]" src="/elena-pic.png"/>
            <p><span className="text-3xl"> My name is Maria Elena Milan.</span><br/>
            I was born in Antigua, Guatemala, grew up in Austin, Texas, and learned design in Fort Collins, Colorado.<br/>
            I am thrilled to be sharing my creations with you. Please reach out if you have any desire for my commission artwork!</p>
        </div>
    )
}