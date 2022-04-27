import { Create, Table, useTable, Button } from '@pankod/refine-antd'
import { ICategory } from '@interfaces'

export const PostCreate: React.FC = () => {

    return (
        <Create actionButtons={
            <>
                <Button type="primary">Custom Button 1</Button>
                <Button size="small">Custom Button 2</Button>
            </>
        }>

        </Create>
    )
}