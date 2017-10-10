from flask import Response, render_template, jsonify

def json(data):
    return jsonify(data)

def response_text(data):
    return data

def render(template, **options):
    return render_template(template, **options)

def response_xml(data):
    return data

def paginate(paginator):
    return json({
            'data': paginator.items, 
            'paginate': {
                'current_page': paginator.page,
                'next': paginator.next_num,
                'prev': paginator.prev_num,
                'total': paginator.total,
                'total_pages': paginator.pages,
                'items': paginator.per_page,
                }
    })
