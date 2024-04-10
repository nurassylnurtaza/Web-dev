from django.urls import path, include

from .views import company_list, company_detail, vacancies_by_company, vacancy_list, vacancy_detail, top_ten_vacancies

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', vacancies_by_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten_vacancies),
]