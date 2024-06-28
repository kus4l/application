export default function Accordion(props: any) {
    return (
    <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          {props.name}
        </div>
        <div className="collapse-content">
          <p>
            {props.content}
          </p>
        </div>
      </div>
    )
}