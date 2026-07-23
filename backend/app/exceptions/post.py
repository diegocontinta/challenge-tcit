from uuid import UUID


class PostNotFoundException(Exception):

    def __init__(self, post_id: UUID):
        self.post_id = post_id
        super().__init__(f"Post '{post_id}' not found")