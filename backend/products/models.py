import random
from django.conf import settings
from django.db import models
from django.db.models import Q
# Create your models here.

User = settings.AUTH_USER_MODEL

TAGS_MODEL_VALUES = ['horro', 'action']


class Product(models.Model):
    user = models.ForeignKey(User, default=1, null=True,
                             on_delete=models.SET_NULL)
    title = models.CharField(max_length=120,)
    content = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=50, decimal_places=2, default=99.99)
    public = models.BooleanField(default=True)

    def get_absolute_url(self):
        return f"/api/product/{self.pk}/"

    @property
    def endpoint(self):
        return self.get_absolute_url()

    @property
    def path(self):
        return f"/product/{self.pk}/"

    @property
    def body(self):
        return self.content

    def is_public(self):
        return self.public  # True or False

    def get_tags_list(self):
        return random.choices(TAGS_MODEL_VALUES)

    @property
    def sale_price(self):
        return "%.2f" % (float(self.price) * 0.8)

    def get_discount(self, discount=0.5):
        return "%.2f" % (float(self.price) * discount)
