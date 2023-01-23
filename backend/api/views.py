import json
from django.forms.models import model_to_dict
from django.http import JsonResponse
from products.models import Product

# Rest Frame Fork For Django
from rest_framework.response import Response
from rest_framework.decorators import api_view
from products.serializers import ProductSerializer
# Django Models


@api_view(["POST"])
def api_home(request, *args, **kwargs):
    """ Create API
    DRF API View
    Args:
        request (request): this method request a request
    Returns:
        api: and create an instance a object and save to db
    """
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        # instance = serializer.save() # -> instance = form.save()
        return Response(serializer.data)

    return Response({"invalid data": "not good data"}, status=400)
