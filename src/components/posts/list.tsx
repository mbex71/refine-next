import { List, Table, useTable } from '@pankod/refine-antd'
import { ICategory } from '@interfaces'

export const PostList: React.FC = () => {
    const { tableProps } = useTable<ICategory>({
        resource: 'posts'
    })
    return (
        <List title="Post" pageHeaderProps={{ subTitle: 'user articels' }} createButtonProps={{ size: 'middle' }}>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="title" title="Title" />
            </Table>
        </List>
    )
}