

export default function Packages(props) {

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                {props.packages.map((pckg, index)=> <li key={index}>{pckg}</li>)}
                </ul>
            </div>
        </div>
    )
}